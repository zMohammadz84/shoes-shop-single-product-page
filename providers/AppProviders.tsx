"use client";
import { FC, ReactNode, useRef } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { StyleProvider } from "@ant-design/cssinjs";
import { AppStore, Store } from "@/lib/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

type ProvidersPropsType = {
  children: ReactNode;
};

const AppProviders: FC<ProvidersPropsType> = ({ children }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = Store();
  }

  return (
    <AntdRegistry>
      <StyleProvider layer>
        <Provider store={storeRef.current}>
          <div>
            <Toaster />
          </div>
          {children}
        </Provider>
      </StyleProvider>
    </AntdRegistry>
  );
};

export default AppProviders;
