import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setLoader } from "../../Actions";
import { BRANDS } from "../../Constants/pages";

const BrandsPage = () => {

  const dispatch = useDispatch();
    const loading = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
  );
  const loadData = useCallback(() => {
    dispatch(selectPage(BRANDS));
    setTimeout(() => dispatch(setLoader(false)) , 500)
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);
  
  return ( !loading &&
    <div className="content">
      <div className="wrapped-content">
        <h5>Brands Page</h5>
      </div>
    </div>
  );
};

export default BrandsPage;