import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="w-full p-1.5 inline-block align-middle">
          <table className="min-w-full divide-y-2 divide-gray-200">
            <thead className="bg-gray-200">
              <tr className="px-6 py-4">
                <th scope="col" className="uppercase text-md text-center">
                  Id
                </th>
                <th scope="col" className="uppercase text-md text-center">
                  Name
                </th>
                <th scope="col" className="uppercase text-md text-center">
                  Age
                </th>
                <th scope="col" className="uppercase text-md text-center">
                  Sex
                </th>
                <th scope="col" className="uppercase text-md text-center ">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-200">
              <tr>
                <td className="px-6 py-4 text-md text-center whitespace-nowrap">
                  1
                </td>
                <td className="px-6 py-4 text-md text-center whitespace-nowrap">
                  Balogun
                </td>
                <td className="px-6 py-4 text-md text-center whitespace-nowrap">
                  23
                </td>
                <td className="px-6 py-4 text-md text-center whitespace-nowrap">
                  Male
                </td>
                <td className="px-6 py-4 text-md text-center whitespace-nowrap">
                  0904847474874
                </td>
                <td className="px-6 py-4 text-md text-center whitespace-nowrap">
                  <Link to="/patient/add`">
                    <button className="text-green-800 px-3 py-2">View</button>
                  </Link>
                </td>
                <td className="px-6 py-4 text-md text-center whitespace-nowrap">
                  <Link to={`/patient/edit`}>
                    <button className="text-yellow-200 px-3 py-2">Edit</button>
                  </Link>
                </td>
                <td className="px-6 py-4 text-md text-center whitespace-nowrap">
                  <button className="text-red-800 px-3 py-2">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
