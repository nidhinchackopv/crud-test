import React, { useEffect , useState} from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

interface Products{
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect( () =>{
        (
            async () => {
                const response = await fetch("http://localhost:3000/users");

                const data = await response.json();

                console.log(data);

                setProducts(data);
            }
        )();
    },[]);

    const del = async (id:number) => {

        if(window.confirm("Are you sure you want to delete it")){

            await fetch(`http://localhost:3000/users/${id}`,{
                method: 'DELETE'
            });

            setProducts(products.filter((p:Products) => p.id !== id ));

        }

    }
    return (
       
        <div>
        <div className="shadow-lg bg-purple-200 pt-10 pb-20">
        <a href="/products/create" data-test-id = 'pro' className="shadow-md border-solid rounded-xl border-4 border-green-200 bg-purple-500 p-2">Add Information</a>
            <h1 className=" pt-10 align-center w-100 h-20 font-sans font-medium antialiased text-2xl">All the information</h1>
            <div className="pt-5 w-full">
                <table data-testid='table' className=" ml-2 mr-2 pt-5 w-full border-separate border border-green-800">
                <thead>
                    <tr className="">
                    <th className="">#id</th>
                    <th className="">Title</th>
                    <th className="">Body</th>
                    </tr>
                </thead>
                <tbody data-testid='tbody'>
                    {
                       products.map((p:Products) => {
                            return (
                                <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.body}</td>
                                <td>
                                    <div className='mb-5'>
                                        <a href={`/products/${p.id}/edit`} data-testid="edit"
                                        className="shadow-md border-solid rounded-xl m-3 border-4 border-gray-200 bg-purple-500 p-2">Edit</a>
                              
                                        <a href="#" className="shadow-md border-solid rounded-xl border-4 border-gray-200 bg-purple-500 p-2"
                                        onClick={() => del(p.id)} data-testid="delete" >Delete</a>
                                    </div>
                                </td>
                                </tr>
                            )
                       })
                    }
                    
                </tbody>
                </table>
            </div>
            </div>
            </div>
    )
}

export default Products
