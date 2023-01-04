import {useEffect, useState} from "react";
import styles from '../styles/users.module.css'
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {


  return (
    <MainContainer keywords={"users next js"}>
      <h1>Users page</h1>
      <ul className={styles.users__list}>
        {users.map(user => {
          return (
            <li className={styles.users}>
              <Link href={`/users/${user.id}`} legacyBehavior>
                <a className={styles.user__item}>{user.id}. {user.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: {users}, // will be passed to the page component as props
  }
}