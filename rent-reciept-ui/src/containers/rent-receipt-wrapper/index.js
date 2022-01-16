import React from "react";
import RentReceiptComponent from "../rent-receipt";

import { formatNiceDate, monthDiff, numberToWords } from "../../utils";

const RentReceiptWrapper = ({ state }) => {
  const {
    fromMonth = 0,
    fromYear = 2019,
    toMonth = 0,
    toYear = 2019,
    nameOfOwner,
    nameOfTenant,
    paymentMode,
    propertyAddress,
    amount,
    ownerAddress,
    isPreview,
  } = state;

  const startDate = new Date(fromYear.toString(), fromMonth.toString());
  const endDate = new Date(toYear.toString(), toMonth.toString());
  const monthDifference = monthDiff(startDate, endDate) + 1;

  // console.log(startDate, endDate, monthDifference);

  const rentReceiptObjectsArray = [];

  // console.log("Amount(in INR)", amount);

  // console.log("--------------------");
  for (let index = 0; index < monthDifference; index++) {
    const currentYearAndMonth = new Date(
      fromYear.toString(),
      parseInt(fromMonth) + parseInt(index)
    );

    const startDayOfMonth = currentYearAndMonth;
    const endDayOfMonth = new Date(
      currentYearAndMonth.getFullYear(),
      currentYearAndMonth.getMonth() + 1,
      0
    );

    console.log(fromYear);
    const obj = {
      index,
      nameOfOwner,
      nameOfTenant,
      paymentDate: formatNiceDate(startDayOfMonth),
      paymentMode,
      propertyAddress,
      currencySymbol: "Rs. ",
      currency: "Rupees",
      amount: amount + "/-",
      amountInWords: numberToWords(amount),
      monthStartDate: formatNiceDate(startDayOfMonth),
      monthEndDate: formatNiceDate(endDayOfMonth),
      ownerAddress,
    };
    rentReceiptObjectsArray.push(obj);
  }
  // console.log("--------------------");
  return (
    <div>
      {rentReceiptObjectsArray.map((elem) => {
        return <RentReceiptComponent {...elem} key={elem.index} />;
      })}
    </div>
  );
};

export default RentReceiptWrapper;
