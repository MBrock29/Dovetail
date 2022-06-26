import s from "./Main.module.scss";
import { useModsQuery } from "../../services/api";
import Card from "./Card/card";
import Header from "./Header/header";
import Link from "next/link";

export default function Home() {
  const { data, error, isLoading, isFetching, isSuccess } = useModsQuery();

  console.log(data);
  return (
    <div className={s.app}>
      <Header />
      <main>
        {isLoading && <h2>...Loading</h2>}
        {isFetching && <h2>...Fetching</h2>}
        {error && <h2>Error</h2>}
        {isSuccess && (
          <div className={s.container}>
            {data.data.map((info) => (
              <Card
                title={info.title}
                subscriberCount={info.subscriberCount}
                id={info.id}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
