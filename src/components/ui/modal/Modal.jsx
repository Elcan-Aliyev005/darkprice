// import React, { useState } from 'react';
// import { Button, Modal, Spin } from 'antd';
// import { useSelector } from 'react-redux';
// import { Api } from '../../../axios/api';

// const DarkPriceModal = ({ isModalOpen, handleOk, handleCancel }) => {
//   const [loading, setLoading] = useState(false)
//   const { storeToken } = useSelector(store => store.store)
//   const handleClick = () => {
//     (async () => {
//         setLoading(true);
//         const products = JSON.parse(localStorage.getItem("updateResponse"))
//         try {
//           Api.post('/api/products/update-all', {
//             token: storeToken,
//             products: products
//           })
//         }
//         catch (e) { console.log(e); }
//         finally {setLoading(false) }
//       })()
//   }

//   return (
//     <>
//       <Modal className='bg-[]' title="Basic Modal" open={isModalOpen} onCancel={handleCancel}
//         footer={[]}>
//         <div className=' text-center bg-[#100E20]  min-h-[300px] border rounded-[8px] flex items-center justify-center'>

//           {loading ? <>

//             <Spin />
//           </> :
//             <div
//               onClick={handleClick}
//               id='start-btn'
//               className='w-[150px] text-[22px] h-[150px]   bg-[#1d193a]  rounded-full flex items-center justify-center text-[#fff]'>
//               Start
//             </div>
//           }
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default DarkPriceModal;

// import React, { useState, useEffect } from 'react';
// import { Button, Modal, Spin } from 'antd';
// import { useSelector } from 'react-redux';
// import { Api } from '../../../axios/api';
// import { io } from 'socket.io-client';

// // WebSocket bağlantısını yaradırıq
// const socket = io("http://localhost:5000");

// const DarkPriceModal = ({ isModalOpen, setIsModalOpen }) => {


//   const [loading, setLoading] = useState(false);
//   const [updates, setUpdates] = useState([]); // Canlı yenilənmələri saxlamaq üçün state
//   const [finalResult, setFinalResult] = useState(null); // Proses bitəndə tam nəticə
//   const { storeToken } = useSelector(store => store.store);
//   const { storeId } = useSelector(store => store.store)

//   useEffect(() => {
//     // Serverdən canlı yenilənmələri dinləyirik
//     socket.on("update", (data) => {
//       setUpdates((prevUpdates) => [...prevUpdates, data]);
//     });

//     // Serverdən tam nəticəni dinləyirik
//     socket.on("update_complete", (data) => {
//       setFinalResult(data.results);
//       setLoading(false);
//     });

//     return () => {
//       socket.off("update");
//       socket.off("update_complete");
//     };
//   }, []);

//   const handleClick = async () => {
//     setLoading(true);
//     try {
//       const updateResponse = await Api.post('/api/products/data-for-update', {
//         productIDs: JSON.parse(localStorage.getItem("resDataIDs")),
//         storeId: storeId
//       })
//       localStorage.setItem("updateResponse", JSON.stringify(updateResponse.data))
//       console.log(updateResponse.data);
//     }
//     catch (err) {
//       console.log(err);
//     }
//     finally {
//       console.log("success")
//       setUpdates([]); // Yeni proses başlandıqda əvvəlki dataları sıfırla
//       setFinalResult(null); // Tam nəticəni sıfırla
//       const products = JSON.parse(localStorage.getItem("updateResponse"));
//       try {
//         await Api.post('/api/products/update-all', {
//           token: storeToken,
//           products: products
//         });
//         setLoading(false);
//       }
//       catch (e) { console.log(e); }
//     }
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//     console.log('ds');
//     setUpdates([])
//     setFinalResult(null)
//   };

//   return (
//     <>
//       <Modal
//         className='bg-[]'
//         title="Canlı Yenilənmələr"
//         open={isModalOpen}
//         onCancel={handleCancel}
//         footer={[]}
//       >
//         <div className='text-center bg-[#100E20] min-h-[300px] border rounded-[8px] flex flex-col items-center justify-center p-4'>

//           {loading ? (
//             <>
//               <Spin />
//               <p className="text-white mt-4">Yenilənmə davam edir...</p>
//             </>
//           ) : (
//             updates.length == 0 && <div
//               onClick={handleClick}
//               id='start-btn'
//               className='w-[150px] text-[22px] h-[150px] bg-[#1d193a] rounded-full flex items-center justify-center text-[#fff] cursor-pointer'
//             >
//               Start
//             </div>
//           )}

//           {/* Canlı yenilənmələr */}
//           {/* <ul className="text-white mt-4 max-h-[150px] overflow-y-auto w-full text-left">
//             {updates.map((update, index) => (
//               <li key={index}>
//                 {update.update_id == "0" ? `✅ Fetching: (${update.status})`
//                   :
//                   update.update_id
//                     ? `✅ Updated: ${update.update_id} (${update.status})`
//                     : update.message}
//               </li>
//             ))}
//           </ul> */}

//           {/* Tam nəticə göstərilir */}
//           {/* {finalResult && (
//             <div className="mt-4 text-white">
//               <h3>✅ Son Nəticə</h3>
//               <pre className="text-xs bg-gray-800 p-2 rounded">{finalResult} məhsulda qiymət dəyişdirilmiş oldu </pre>
//             </div>
//           )} */}

//         </div>
//       </Modal>
//     </>
//   );
// };

// export default DarkPriceModal;
import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { Api } from '../../../axios/api';
import { io } from 'socket.io-client';

// WebSocket bağlantısını qur
const socket = io(import.meta.env.VITE_API_URL_DEVELOPMENT, {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

const DarkPriceModal = ({ isModalOpen, setIsModalOpen }) => {
  const [loading, setLoading] = useState(false);
  const [updates, setUpdates] = useState([]); // Canlı yenilənmələri saxlamaq üçün state
  const [finalResult, setFinalResult] = useState(null); // Proses bitəndə tam nəticə
  const { storeToken } = useSelector(store => store.store);
  const { storeId } = useSelector(store => store.store);
  const listRef = useRef()
  console.log(listRef);


  useEffect(() => {
    console.log("🔗 WebSocket qoşulur...");

    socket.on("connect", () => {
      console.log("✅ WebSocket bağlandı:", socket.id);
    });

    socket.on("fetching_data", (data) => {
      console.log("🔴 FETCHING DATA:", data);
      setUpdates((prevUpdates) => [...prevUpdates, { message: `🟡 ${data.message}`, type: "fetching" }]);
    });

    socket.on("data_received", (data) => {
      console.log("🟢 DATA RECEIVED:", data);
      setUpdates((prevUpdates) => [...prevUpdates, { message: `🟢 ${data.message}`, type: "received" }]);
    });

    socket.on("batch_processing", (data) => {
      console.log("🔄 BATCH PROCESSING:", data);
      setUpdates((prevUpdates) => [...prevUpdates, { message: `🔄 Processing batch ${data.batch_start} - ${data.batch_end}`, type: "batch" }]);
    });

    socket.on("update", (data) => {
      console.log("✅ UPDATED:", data);
      setUpdates((prevUpdates) => [...prevUpdates, { message: `✅ Updated: ${data.update_id} (${data.status})`, type: "update" }]);
    });

    socket.on("update_complete", (data) => {
      console.log("✅ UPDATE COMPLETE:", data);
      setTimeout(() => {
        setFinalResult(data.results);
      }, 100)
      setLoading(false);
    });

    socket.on("disconnect", () => {
      console.log("❌ WebSocket bağlantısı kəsildi.");
    });

    return () => {
      socket.off("fetching_data");
      socket.off("data_received");
      socket.off("batch_processing");
      socket.off("update");
      socket.off("update_complete");
      socket.off("disconnect");
    };
  }, []);

  const handleClick = async () => {
    setLoading(true);
    setUpdates([]);
    setFinalResult(null);

    try {
      const updateResponse = await Api.post('/api/products/data-for-update', {
        productIDs: JSON.parse(localStorage.getItem("resDataIDs")),
        storeId: storeId
      });

      localStorage.setItem("updateResponse", JSON.stringify(updateResponse.data));
      console.log(updateResponse.data);
    } catch (err) {
      console.log(err);
    }

    try {
      const products = JSON.parse(localStorage.getItem("updateResponse"));
      console.log(products);

      await Api.post('/api/products/update-all', {
        token: storeToken,
        products: products
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);

  };
  const handleClear = () => {
    setUpdates([]);
    setFinalResult(null);
  }


  const createHistory = async () => {
    const now = new Date();
    // Hem tarih hem saat (DD.MM.YYYY HH:mm formatında)
    const dateTime = now.toLocaleString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    try {
      const res = await Api.post("/api/db/create-history", {
        results: finalResult,
        time: dateTime,
        storeId: storeId
      })
      console.log(res);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Modal
        className='!w-[700px] live'
        title="Canlı Yenilənmələr"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <button className='!bg-[#fff] me-[10px] px-[20px] py-[8px] rounded-[10px] !text-[#000] !text-[15px]  !border-0' onClick={handleClear}>
            Clear
          </button>,
          <button className='!bg-[#000] px-[20px] py-[8px] rounded-[10px] !text-[#fff] !text-[15px]  border border-[#333]' onClick={createHistory}>
            History Add
          </button>
        ]}
      >
        <div className='text-center  relative   min-h-[300px]  rounded-[8px] flex flex-col items-center justify-center p-[20px]'>
          {loading ? (
            <div className=' h-[100px]  w-full'>
              <div className='py-[10px] absolute top-[20px] left-0 w-full'>
                <Spin />
                <p className="text-white text-[20px] mt-4">Yenilənmə davam edir...</p>
              </div>
            </div>
          ) : (
            updates.length === 0 && (
              <div
                onClick={handleClick}
                id='start-btn'
                className='w-[150px] text-[22px] h-[150px] glass-effect !rounded-full flex items-center justify-center text-[#fff] cursor-pointer'
              >
                Start
              </div>
            )
          )}

          {/* Canlı yenilənmələr */}

          <>
            {finalResult !== null && (
              <div className="pb-2 text-[16px] text-white">
                <h3>✅ Son Nəticə</h3>
                <p><span className='text-[18px]'>{finalResult.length}</span> məhsulda qiymət dəyişdirildi.</p>
              </div>
            )}

            <ul ref={listRef} className="text-white mt-4 max-h-[250px] overflow-y-auto w-full text-left   rounded-lg ">

              {updates.map((update, index) => (
                <li
                  key={index}
                  className={`px-2 py-[10px] border-b border-[#333] ${update.type === "fetching" ? "text-yellow-400" :
                    update.type === "received" ? "text-green-400" :
                      update.type === "batch" ? "text-blue-400" :
                        "text-white"
                    }`}
                >
                  {update.message}
                </li>
              ))}
            </ul>
          </>

          {/* Tam nəticə göstərilir */}


        </div>
      </Modal>
    </>
  );
};

export default DarkPriceModal;
