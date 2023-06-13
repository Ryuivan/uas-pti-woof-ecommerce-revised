import React, { useEffect, useState } from "react";
import axios from "axios";

const Waktu = () => {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://api.timezonedb.com/v2.1/list-time-zone?key=AMV0LDQAFOD9&format=json&country=ID"
        );
        const currentDateTime = new Date(response.data.zones[0].timestamp * 1000);
        setDate(currentDateTime.getDate());
        setMonth(getMonthName(currentDateTime.getMonth())); // Get month name
        setHour(currentDateTime.getHours());
        setMinute(currentDateTime.getMinutes());
        setSecond(currentDateTime.getSeconds());
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setHour(d.getHours());
      setMinute(d.getMinutes());
      setSecond(d.getSeconds());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getMonthName = (monthValue) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[monthValue];
  };

  return (
    <div>
      <p>
        <strong>
          {date} {month} 2023 <br /> {hour} : {minute} : {second}
        </strong>
      </p>
    </div>
  );
};

export default Waktu;
