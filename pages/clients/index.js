import Link from "next/link";

const ClientsPage = () => {
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        <li>
          <Link href="/clients/ch">CH</Link>
        </li>
        <li>
          <Link href="/clients/yun">YUN</Link>
        </li>
      </ul>
    </div>
  );
}

export default ClientsPage;
