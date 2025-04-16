import React from "react";
import Image from "next/image";
import { BASE_URL } from "../constants";

export const Logo = () => (<Image src={`${BASE_URL}/logo.svg`} alt="ava collins dot dev" fill />)