// "use client";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import { ReactNode } from "react";

// interface SettingsLayoutProps {
//   children: ReactNode;
// }

// const SettingsLayout = ({ children }: SettingsLayoutProps) => {
//   const router = useRouter();
//   const { pathname } = router;

//   const tabs = [
//     { name: "Profile", path: "/settings/profile" },
//     { name: "Security", path: "/settings/security" },
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Settings</h1>
//       <div className="flex space-x-4 mb-6">
//         {tabs.map((tab) => (
//           <Link href={tab.path} key={tab.name}>
//             <a
//               className={`py-2 px-4 rounded ${
//                 pathname === tab.path
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//             >
//               {tab.name}
//             </a>
//           </Link>
//         ))}
//       </div>
//       <div>{children}</div>
//     </div>
//   );
// };

// export default SettingsLayout;
