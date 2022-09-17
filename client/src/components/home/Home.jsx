import { Fragment } from "react"; // to avoid creation of extra div.
import { styled, Box } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

// components
import NavBar from "./NavBar";
import Banner from "./Banner";
import { getProducts } from "../../redux/actions/productActions";

//
const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`
const Home = () => {

    // state.getProducts -> from browser
    const { products } = useSelector(state => state.getProducts);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    return (
        <Fragment>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </Fragment>
    );
};

export default Home;
