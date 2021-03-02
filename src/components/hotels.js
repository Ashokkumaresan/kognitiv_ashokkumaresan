import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Get } from "../service/request";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};



let Hotel = (props) => {
    const [form] = Form.useForm();
  const [distanceLookup, pushDistanceLookup] = useState();
  const [brandeLookup, pushBrandLookup] = useState();
  const [hotel_name, updateHotelName] = useState();
  const [hotel_location, updateHotelLocation] = useState();
  const [hotel_distance, updateHotelDistance] = useState();
  const [hotel_brand, updateHotelBrand] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    
    localStorage.setItem("kognitiv",JSON.stringify(values));
    form.resetFields();
  
  };
  useEffect(() => {
    console.log("*******effect*******");
    Get("https://ashok-kumaresan.free.beeceptor.com/")
      .then((res) => {
        console.log("Response", res);
        pushDistanceLookup(res.data);
        dispatch({
          type: "GET_DISTANCELOOKUP",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("Error", err);
      });
    Get("https://brands.free.beeceptor.com/")
      .then((res) => {
        console.log("Response", res);
        pushBrandLookup(res.data);
        dispatch({
          type: "GET_BRANDLOOKUP",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("Error", err);
      });
      
  }, []);
  useEffect(() => {
    const params = new URLSearchParams();   
    if (hotel_name) params.set("hotel_name", hotel_name);
    if (hotel_location) params.set("hotel_location", hotel_location);
    if (hotel_brand) params.set("hotel_brand", hotel_brand);
    if (hotel_distance) params.set("hotel_distance", hotel_distance);
    if (params.toString().length) history.push({ search: params.toString() });
  }, [hotel_name, hotel_location, hotel_brand, hotel_distance]);

  return (
      <section className="container">
          <div className="content_holder">
                <h1>Hello World</h1>
          </div>
          <div className="form-control">
             
    <Form {...layout} name="control-hooks" form={form} onFinish={onFinish} >
    <h2>Please fill the details</h2>
      <Form.Item
        name="hotel_name"
        label="Hotel Name"
        rules={[{ required: true }]}
      >
        <Input
          value={hotel_name}
          onChange={(e) => updateHotelName(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="hotel_location"
        label="Hotel Location"
        rules={[{ required: true }]}
      >
        <Input
          value={hotel_location}
          onChange={(e) => updateHotelLocation(e.target.value)}
        />
      </Form.Item>
      <Form.Item name="distance" label="Distance" rules={[{ required: true }]}>
        <Select
          placeholder="Select a distance"
          allowClear
          value={hotel_distance}
          onChange={(e) => updateHotelDistance(e)}
        >
          {distanceLookup
            ? distanceLookup.map((_distance) => {
                return <Option value={_distance} key={_distance}>{_distance}</Option>;
              })
            : []}
        </Select>
      </Form.Item>
      <Form.Item name="brands" label="Brands" rules={[{ required: true }]}>
        <Select
          placeholder="Select a brands"
          allowClear
          value={hotel_brand}
          onChange={(e) => updateHotelBrand(e)}
        >
          {brandeLookup
            ? brandeLookup.map((_brand) => {
                return <Option value={_brand} key={_brand}>{_brand}</Option>;
              })
            : []}
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>       
      </Form.Item>
    </Form>
    </div>
    </section>
  );
};

export default Hotel;
