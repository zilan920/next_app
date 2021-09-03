import React from 'react';
import { useRouter } from 'next/router';


export default function Test() {
  const router = useRouter();
  const { title } = router.query;
  return <h1>{title}</h1>;
}