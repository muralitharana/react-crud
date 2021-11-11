import * as React from "react";
import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const LazyComp = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./Header")), 3000)
    )
);
export default function Home() {
  return (
    <>
      <Suspense
        fallback={
          <Box>
            <div style={{ height: "200px" }}></div>
            <CircularProgress />
            <div>Loading....</div>
          </Box>
        }
      >
        <LazyComp />
      </Suspense>
      
    </>
  );
}
