const pageConfig = {
  // Title for your status page
  title: "Miasa's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'mailto:mail@kintamiao.top', label: 'Email Us', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 10,
  // Define all your monitors here
  monitors: [
    {
      id: 'miasa_monitor',
      name: 'KintaMiao Website',
      method: 'GET',
      target: 'https://kintamiao.top'
    },
    {
      id: 'yunyoo_hk_vps',
      name: 'Hong Kong VPS',
      method: 'TCP_PING',
      target: '103.169.126.229:22'
    },
    {
      id: 'yunyoo_us_vps',
      name: 'USA VPS',
      method: 'TCP_PING',
      target: '208.87.240.5:10136'
    },
    {
      id: 'yunyoo_uk_vps',
      name: 'UK(GB) VPS',
      method: 'TCP_PING',
      target: '146.103.53.18:22'
    },
    {
      id: 'sjy_de_vps',
      name: 'Germany VPS',
      method: 'TCP_PING',
      target: '109.71.253.46:10019'
    },
    {
      id: 'sjy_kr_vps',
      name: 'Korea VPS',
      method: 'TCP_PING',
      target: 'chuncheon.guapi.me:10013'
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}
// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
