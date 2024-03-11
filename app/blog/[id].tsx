import { useRouter } from 'next/router';
import Image from 'next/image';

export default function BlogPage() {
  const router = useRouter();
  const { id } = router.query;
  
  return (
    <div>
      <h1>Blog {id}</h1>
      <Image src="assets/blog.png" alt='Blog image'></Image>
    </div>
  );
}