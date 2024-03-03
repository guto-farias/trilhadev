import('node-fetch').then(async (module) => {
    const fetch = module.default;
    let cont = 0

    while(cont<10000){
    fetch("https://www.menti.com/core/votes/cxe9dezw9xfc", {
        "headers": {
          "accept": "application/json",
          "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
          "baggage": "sentry-environment=dev,sentry-release=5a2c8937b71c021eac502c8778c6447b86a4c5ed,sentry-public_key=acefa0c4155042c7a28a0fae734bb32d,sentry-trace_id=306b19a0ea7d4998bce48799b806d010,sentry-transaction=%2F,sentry-sampled=false",
          "content-type": "application/json",
          "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sentry-trace": "306b19a0ea7d4998bce48799b806d010-9904f3e0d5bab715-0",
          "x-identifier": "al9pvy9cyjre2uhnkd52gffuqc3js4u3gr7ifq4pd6gzweiorb7oi2j4cnt22ity"
        },
        "referrer": "https://www.menti.com/al9phcywbeec",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"vote\":\"ei nossa oxi krl bah meu\",\"type\":\"wordcloud\"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      });

      cont++
    }
  });



  