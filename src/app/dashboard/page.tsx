"use client";
// import useSWR from "swr";

const Dashboard = () => {
    // const [data, setData]
    //     = useState([]);
//         const [isLoading, setIsLoading]
//         = useState(false);

//         const [err, setErr]
//         = useState(false);
        
//    useEffect(() => {
//      const getData = async () => {
//       setIsLoading(true);
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         cache: "no-store",
//       });

//       if (!res.ok) {
//         setErr(true);
//       }

//       const data = await res.json()

//       setData(data);
//       setIsLoading(false);
//     };
//     getData()
//   }, []);

  //  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  //  const { data = [], mutate, error, isLoading } = useSWR(
  //    `/api/posts`,
  //    fetcher
  //  );

     return (
            <div>
                Dashboard
            </div>
        );
}

export default Dashboard
