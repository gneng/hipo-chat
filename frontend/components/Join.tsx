import React, { useState } from 'react'
import Link from 'next/link';
import styles from '../styles/Join.module.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className={styles.joinOuterContainer}>
      <div className={styles.joinInnerContainer}>

        <h1 className={styles.heading}>Join</h1>

        <input
          className={styles.joinInput}
          type="text"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
        
        <input
          className={styles.joinInput}
          type="text"
          placeholder="Room"
          onChange={e => setRoom(e.target.value)}
        />

        <Link href={`/chat?name=${name}&room=${room}`}>
          <button
            className={`${styles.button} ${styles['mt-20']}`}
            type="submit"
            onClick={ e => (!name || !room) ? e.preventDefault() : null }
          >
            Sign In
          </button>
        </Link>

      </div>
    </div>
  )
}

export default Join
