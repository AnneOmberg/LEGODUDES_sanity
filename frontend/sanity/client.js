import { createClient } from '@sanity/client'

export const client = createClient({
  //Hvis du har hentet dette prosjektet fra GitHub, må du endre
  //projectId til din egen prosjektid fra sanity.io/manage
  projectId: "3c3aryfw",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07"
})

//Nøkkelen til sanity api -> CORS origins
//skUXZTOXhXau2GUzP3soN75Ztq7Zc3BYWHaXiWhGyQRj7zdSbVOpilIrq6PKWmtvup9XiUA2oFdvmAsJv20EEtd1X6ON3TauOFCoXpE6sKAd2f4ErICnzm7ax54X8UYpvcfppYsvwN5YZI2IsmSrC7oZ1vxyuc2WjyePpFLwVkzPfQA3q6m2

export const writeClient = createClient({
  projectId: "3c3aryfw",
  dataset: "production",
  // ved mindre vi skal laste opp Filer, trenger vi ikke å bruke cdn. np trenger vi ikke det, ogsetter til false
  useCdn: false,
  apiVersion: "2022-03-07",
  token: "skUXZTOXhXau2GUzP3soN75Ztq7Zc3BYWHaXiWhGyQRj7zdSbVOpilIrq6PKWmtvup9XiUA2oFdvmAsJv20EEtd1X6ON3TauOFCoXpE6sKAd2f4ErICnzm7ax54X8UYpvcfppYsvwN5YZI2IsmSrC7oZ1vxyuc2WjyePpFLwVkzPfQA3q6m2"
})