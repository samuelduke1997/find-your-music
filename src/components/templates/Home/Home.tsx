import React from "react";

import { useAppSelector } from "../../../redux/hooks";
import { getUser } from "../../../redux/slices/user";

const HomeTemplate = () => {
  const user = useAppSelector(getUser);

  return <div className="fym_template_home">{user.name}</div>;
};

export default HomeTemplate;
