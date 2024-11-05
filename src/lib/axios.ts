import { config } from "@/constants/config";
import axios from "axios";

export const client = axios.create({
  headers: {
    Authorization: `Bearer ${config.FIREFLY_API_ACCESS_TOKEN}`,
  },
});
// curl 'http://localhost/api/v1/transactions'   -H 'sec-ch-ua-platform: "Windows"'   -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZGMwOTA3NDg1NGYwMjVlNzlkZTg0ZGVkYWFiZWE3Y2M1YTE3ZmExZjdiMDgzNTkzNjc0N2IyMWE2YTMyNTMwYWVkOTIyNmRjOWJlNTNmZjAiLCJpYXQiOjE3MzAyNDU2NDEuNjc2NTU0LCJuYmYiOjE3MzAyNDU2NDEuNjc2NTU2LCJleHAiOjE3NjE3ODE2NDEuNTY2MzgyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.F0Chpw9_67G9oV7AlI3GOeTFDtkMYa6ZUlunYyvDxDNow4OOz210R0reeWWB1gr8QHO0FpK_mEOt7lYL0Wb-oYphK_Sbd7CgrVv1k3sYBEIO0bQaTWHKDp0zf58oKbQQaLs5KTq7HBU3fiEutpFGNPdNW63t1_l_3JtWUvAOT8AQvhybAjAEBBO9scL6KHvjOnWdNvzgElmb3dWcBhPxd4H5IL50R2fGaaikudhsmPhfSCh_frJHmh-TBUAbA-Y5Hs5wXfbdBzoawZMoOE1sQ4PSY73AMsqoycljvrBWOsS7j-7AB1hACYi4iJqzldH2wtgc22Bv7EQkKWwwPECw8mAPvynvgZUdMcEyfUDDIgt5pAezR32Wx8b5AUvYCT4_EV1UJXppqoZxTxFYxljrCED9c6enn6TDlh_F7vHmUlVMAx_mJI92zo1TzPcai2hIVdq1n1EId4QP8W6LVRtwAgtw3j4zcP9zDoBX4Go5Fe8A_DZbKVjg9El2FbEbJgqtWI_ELmnuwIEEF5eXXjLvxK4C_M308bmomaoKNMTKLRs_3OVZYdTN3OqVDVasiJICz7rNNFjtwefT3W2Cg4fRa3VWjN01Wfmy67Sl7v6flEGjdVQDSeSIKa_WS_Af_UIjWKPVn730rA03laCQPoCbEgUbblybK797MbKpjyjVBsI'   -H 'Referer: http://localhost:3000/'   -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'   -H 'Accept: application/json, text/plain, */*'   -H 'sec-ch-ua: "Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"'   -H 'sec-ch-ua-mobile: ?0'
