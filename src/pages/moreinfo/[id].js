import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useModByIdQuery } from "../../../services/api";
import { Loading } from "../loading/loading";
import { addCurrentMod } from "../../../services/currentMod";
import s from "./[id].module.scss";

const MoreInfo = () => {
  const router = useRouter();
  const num = router.query.id;
  const { data, error, isLoading, isSuccess } = useModByIdQuery(num);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.currentMod.value);

  const runDispatch = () => {
    dispatch(addCurrentMod(data.data));
  };
  isSuccess && runDispatch();

  return (
    <main>
      {isLoading && <Loading />}
      {error && <h2>Error</h2>}
      {isSuccess && (
        <div className={s.container}>
          <h3>{info.title}</h3>
          <h3> {info.subscriberCount}</h3>
          <h3>{info.shortDescription}</h3>
          <h3>{info.ownerPlatformOss}</h3>
          <h3>{info.createdAt}</h3>
          <h3>{info.category}</h3>
        </div>
      )}
    </main>
  );
};

export default MoreInfo;
