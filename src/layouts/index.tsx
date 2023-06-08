import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { Helmet, Outlet } from 'umi';

function Layouts() {
  return (
    <>
      <Helmet>
        <title>APP</title>
      </Helmet>
      <ConfigProvider locale={zhCN}>
        <Outlet />
      </ConfigProvider>
    </>
  );
}

Layouts.propTypes = {};

export default Layouts;
