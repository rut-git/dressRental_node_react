// import React, { useState, useEffect } from 'react';
// import { Button } from 'primereact/button';
// import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// import { Rating } from 'primereact/rating';
// import { Tag } from 'primereact/tag';
// import { InputText } from 'primereact/inputtext';
// import { Dropdown } from 'primereact/dropdown';
// import { classNames } from 'primereact/utils';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// // import './Catalog.css';
// import d1 from "./images/dress1.png"
// import d2 from "./images/dress2.png"
// import d3 from "./images/dress3.jpg"
// import d4 from "./images/dress4.png"

// const ProductService = {
//     getProducts: () => {
//         return Promise.resolve([
//             { id: 1, name: 'Red Dress', color: 'Red', imageUrl: d1, price: 100,  category: 'Dresses' },
//             { id: 2, name: 'Blue Dress', color: 'Blue', imageUrl: d2, price: 120,  category: 'Dresses' },
//             { id: 3, name: 'Green Dress', color: 'Green', imageUrl: d3, price: 90,  category: 'Dresses' },
//             { id: 4, name: 'Yellow Dress', color: 'Yellow', imageUrl: d4, price: 110, category: 'Dresses' },
//         ]);
//     }
// };

// export default function BasicDemo() {
//     const [products, setProducts] = useState([]);
//     const [layout, setLayout] = useState('grid');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filterColor, setFilterColor] = useState('');

//     useEffect(() => {
//         ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
//     }, []);

//     const colors = [
//         { label: 'All Colors', value: '' },
//         { label: 'Red', value: 'Red' },
//         { label: 'Blue', value: 'Blue' },
//         { label: 'Green', value: 'Green' },
//         { label: 'Yellow', value: 'Yellow' },
//     ];

//     const getSeverity = (product) => {
//         switch (product.inventoryStatus) {
//             case 'INSTOCK':
//                 return 'success';
//             case 'LOWSTOCK':
//                 return 'warning';
//             case 'OUTOFSTOCK':
//                 return 'danger';
//             default:
//                 return null;
//         }
//     };

//     const listItem = (product, index) => {
//         return (
//             <div className="col-12" key={product.id}>
//                 <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
//                     <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.imageUrl} alt={product.name} />
//                     <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
//                         <div className="flex flex-column align-items-center sm:align-items-start gap-3">
//                             <div className="text-2xl font-bold text-900">{product.name}</div>
//                         </div>
//                         <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
//                             <span className="text-2xl font-semibold">${product.price}</span>
//                             <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     const gridItem = (product) => {
//         return (
//             <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
//                 <div className="p-4 border-1 surface-border surface-card border-round">
//                     <div className="flex flex-column align-items-center gap-3 py-5">
//                         <img className="w-9 shadow-2 border-round" src={product.imageUrl} alt={product.name} />
//                         <div className="text-2xl font-bold">{product.name}</div>
//                     </div>
//                     <div className="flex align-items-center justify-content-between">
//                         <span className="text-2xl font-semibold">${product.price}</span>
//                         <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     const itemTemplate = (product, layout, index) => {
//         if (!product) {
//             return;
//         }

//         if (layout === 'list') return listItem(product, index);
//         else if (layout === 'grid') return gridItem(product);
//     };

//     const header = () => {
//         return (
//             <div className="header-container">
//                 <div className="p-field search-container">
//                     <InputText
//                         placeholder="Search by name"
//                         value={searchTerm}
//                         onChange={e => setSearchTerm(e.target.value)}
//                         className="p-inputtext-lg p-d-block"
//                     />
//                 </div>
//                 <div className="p-field color-container">
//                     <Dropdown
//                         value={filterColor}
//                         options={colors}
//                         onChange={e => setFilterColor(e.value)}
//                         placeholder="Select a color"
//                         className="p-dropdown-lg p-d-block"
//                     />
//                 </div>
//                 <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
//             </div>
//         );
//     };

//     const filteredProducts = products.filter(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (filterColor ? product.color.toLowerCase() === filterColor.toLowerCase() : true)
//     );

//     return (
//         <div className="catalog">
//             <DataView value={filteredProducts} itemTemplate={itemTemplate} layout={layout} header={header()} />
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { classNames } from 'primereact/utils';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import './Catalog.css';
import d1 from "./images/dress1.png"
import d2 from "./images/dress2.png"
import d3 from "./images/dress3.jpg"
import d4 from "./images/dress4.png"
import { useNavigate } from "react-router-dom";

const ProductService = {
    getProducts: () => {
        return Promise.resolve([
            { id: 1, name: 'Red Dress', color: 'Red', imageUrl: d1, price: 100,  category: 'Dresses' },
            { id: 2, name: 'Blue Dress', color: 'Blue', imageUrl: d2, price: 120,  category: 'Dresses' },
            { id: 3, name: 'Green Dress', color: 'Green', imageUrl: d3, price: 90,  category: 'Dresses' },
            { id: 4, name: 'Yellow Dress', color: 'Yellow', imageUrl: d4, price: 110, category: 'Dresses' },
        ]);
    }
};

export default function BasicDemo() {
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterColor, setFilterColor] = useState('');
    const navigate=useNavigate()

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
    }, []);

    const colors = [
        { label: 'All Colors', value: '' },
        { label: 'Red', value: 'Red' },
        { label: 'Blue', value: 'Blue' },
        { label: 'Green', value: 'Green' },
        { label: 'Yellow', value: 'Yellow' },
    ];

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return null;
        }
    };
    const choose=()=>{
        navigate("./choose")
    }
    const listItem = (product, index) => {
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.imageUrl} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                            <Button label="לפרטים" className="p-button-rounded p-button-info" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-column align-items-center gap-3 py-5">                       
                         <div className="text-2xl font-bold" style={{fontSize:'20px'}}>{product.name}</div>

                        <img className="w-9 shadow-2 border-round" src={product.imageUrl} alt={product.name} />
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        {/* <span className="text-2xl font-semibold">${product.price}</span> */}
                        <Button label="לפרטים" className="p-button-info" style={{width:'510px'}} onClick={choose}/>
                        <br/><br/>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout, index) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return listItem(product, index);
        else if (layout === 'grid') return gridItem(product);
    };

    const header = () => {
        return (
            <div className="header-container">
                <div className="p-field search-container">
                    <InputText
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="p-inputtext-lg p-d-block"
                    />
                </div>
                <div className="p-field color-container">
                    <Dropdown
                        value={filterColor}
                        options={colors}
                        onChange={e => setFilterColor(e.value)}
                        placeholder="Select a color"
                        className="p-dropdown-lg p-d-block"
                    />
                </div>
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterColor ? product.color.toLowerCase() === filterColor.toLowerCase() : true)
    );

    return (
        <div className="catalog">
            <DataView value={filteredProducts} itemTemplate={itemTemplate} layout={layout} header={header()} />
        </div>
    );
}
