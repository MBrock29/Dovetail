import s from "./Main.module.scss";
import { useModsQuery } from "../../services/api";
import Card from "./Card/card";
import Header from "./header/header";
import { Loading } from "./loading/loading";

export default function Home() {
  const { data, error, isLoading, isSuccess } = useModsQuery();

  return (
    <div className={s.app}>
      <Header />
      <main>
        {isLoading && <Loading />}
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
