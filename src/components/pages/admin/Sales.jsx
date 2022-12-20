import { getToken } from "../../../helpers/auth";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../atoms/Loader";

const Sales = () => {
  const { data, error, loading } = useFetch("admin/invoices", {
    headers: {
      Authorization: `Bearer ${getToken()}}`
    }
  });

  if (loading) return <Loader />
  if (error) return <h1 className="text-center text-2xl font-medium text-red-500">{error?.message}</h1>

  return (
    <div>
      {
        data.map(sale =>
          <div> {JSON.stringify(sale)} </div>
        )
      }
    </div>
  )
};

export default Sales;
