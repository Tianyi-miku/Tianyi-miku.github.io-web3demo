import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";

const useNotication = (prop?: any) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement = 'topRight') => {
    api.info({
      message: `失败`,
      description: <>{prop?.description ? prop?.description : ''}</>,
      placement,
    });
  };
  return [openNotification]
}



export default useNotication;