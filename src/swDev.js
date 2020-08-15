export default function swDev() {
  const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swDev).then((result) => {
    console.log('result', result)
  })
}