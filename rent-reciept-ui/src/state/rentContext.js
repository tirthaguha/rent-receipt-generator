import React, { createContext, useContext } from "react";

export const RentContext = createContext({});

function rentReducer(state, action) {
  // console.log(state);
  switch (action.type) {
    case "set_tenant_name": {
      return { ...state, nameOfTenant: action.data };
    }
    case "set_owner_name": {
      return { ...state, nameOfOwner: action.data };
    }
    case "set_from_month": {
      return { ...state, fromMonth: action.data };
    }
    case "set_from_year": {
      return { ...state, fromYear: action.data };
    }
    case "set_to_month": {
      return { ...state, toMonth: action.data };
    }
    case "set_to_year": {
      return { ...state, toYear: action.data };
    }
    case "set_payment_mode": {
      return { ...state, paymentMode: action.data };
    }
    case "set_property_address": {
      return { ...state, propertyAddress: action.data };
    }
    case "set_rent_amount": {
      return { ...state, amount: action.data };
    }
    case "set_owner_address": {
      return { ...state, ownerAddress: action.data };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const RentContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(rentReducer, {
    nameOfOwner: "Placeholder Name",
    nameOfTenant: "Placeholder Name",
    fromMonth: 0,
    fromYear: 2019,
    toMonth: 0,
    toYear: 2019,
    paymentMode: "Cash",
    propertyAddress: "Placeholder Address",
    ownerAddress: "Placeholder Address",
    amount: 250,
  });

  const context = { state, dispatch };

  return (
    <RentContext.Provider value={context}>{children}</RentContext.Provider>
  );
};

export const WithContext = (WrappedComponent) => {
  return function WrappedFunction(props) {
    const context = useContext(RentContext);
    const { state, dispatch } = context;
    return (
      <>
        <WrappedComponent state={state} dispatch={dispatch} {...props} />;
      </>
    );
  };
};
