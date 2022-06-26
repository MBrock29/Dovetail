import { useRouter } from "next/router";
import { useModByIdQuery } from "../../../services/api";

const MoreInfo = () => {
  const router = useRouter();
  const id = router.query;
  const num = id.id;
  const { data, error, isLoading, isFetching, isSuccess } =
    useModByIdQuery(num);

  console.log(data);

  return (
    <main>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Error</h2>}
      {isSuccess && (
        <div>
          <h3>title={data.data.title}</h3>
          <h3> subscriberCount={data.data.subscriberCount}</h3>
          <h3>id={data.data.shortDescription}</h3>
          <h3>platform={data.data.ownerPlatformOss}</h3>
        </div>
      )}
    </main>
  );
};

export default MoreInfo;
