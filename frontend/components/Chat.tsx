import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import io from 'socket.io-client';
import styles from '../styles/Chat.module.css';

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const ENDPOINT = 'localhost:5000';
  const router = useRouter();
  let socket: any;

  useEffect(() => {
    // set name and room depends on query
    let { name, room }: any = router.query;
    setName(name);
    setRoom(room);

    // connects to backend socket
    socket = io(ENDPOINT);
    console.log(socket);

    // emit message
    socket.emit('join', { name, room }, () => {
      // handle errors if any
    });

    // disconnect socket when left this page
    return () => {
      socket.disconnect();
    }
  }, [router.query])

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1>Welcome, {name}</h1>
        <p>{room}</p>
      </div>
    </div>
  )
}

export default Chat
