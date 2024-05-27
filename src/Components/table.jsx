import React from 'react';
import Sidebar2 from '../Components/sidebar2';
import Nav from '../Components/navbar2';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'




const Tables = () => {
    //dummy

    const dummyData = [
        {
            id: '1', name: 'onion', avatar: 'avatar1.png', skills: 'React js', profile: 'view', deadline: '', type: '', isComplete: true, node: 3
        },
        {
            id: '2', name: 'tomato', avatar: 'avatar2.png', skills: 'html css', profile: 'view', deadline: '', type: '', isComplete: true, node: 3
        },
        {
            id: '3', name: 'potato', avatar: 'avatar3.png', skills: 'flutter', profile: 'view', deadline: '', type: '', isComplete: true, node: 3
        },
        {
            id: '4', name: 'carror', avatar: 'avatar4.png', skills: 'DSA', profile: 'view', deadline: '', type: '', isComplete: true, node: 3
        },

    ]
  



    
    return (
        <>
            <Sidebar2 />
            <Nav />
            <TableContainer>
  <Table variant='simple'>
    <TableCaption></TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Avatar</Th>
        <Th>Skills</Th>
        <Th>Profile</Th>
      </Tr>
    </Thead>
   
           <Tbody>
           {dummyData.map((data) =>(
           <Tr key={data.id} className='font-inter'>
             
             <Td >{data.name}</Td>
             <Td>{data.avatar}</Td>
             <Td >{data.skills}</Td>
             <Td >{data.profile}</Td>
           </Tr>
          
        
        ))}
         </Tbody> 
   
   
  </Table>
</TableContainer>
           
        </>
    );
};

export default Tables;
// import React from 'react';
// import { useTable } from 'react-table';
// import Sidebar2 from '../Components/sidebar2';
// import Nav from '../Components/navbar2';

// const Table = () => {
//   const data = React.useMemo(() => [
//     { id: '1', name: 'onion', avatar: 'avatar1.png', skills: 'React js', profile: 'view' },
//     { id: '2', name: 'tomato', avatar: 'avatar2.png', skills: 'html css', profile: 'view' },
//     { id: '3', name: 'potato', avatar: 'avatar3.png', skills: 'flutter', profile: 'view' },
//     { id: '4', name: 'carrot', avatar: 'avatar4.png', skills: 'DSA', profile: 'view' },
//   ], []);

//   const columns = React.useMemo(() => [
//     { Header: 'Name', accessor: 'name' },
//     { Header: 'Avatar', accessor: 'avatar' },
//     { Header: 'Skills', accessor: 'skills' },
//     { Header: 'Profile', accessor: 'profile' },
//   ], []);

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data });

//   return (
//     <>
//       <Sidebar2 />
//       <Nav />
//       <table {...getTableProps()} className='ml-[20rem] mt-[4rem]'>
//         <thead >
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map(row => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => (
//                   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default Table;
