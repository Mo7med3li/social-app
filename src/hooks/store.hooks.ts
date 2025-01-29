import { AppDispatch, rooteState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelectior = useSelector.withTypes<rooteState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
