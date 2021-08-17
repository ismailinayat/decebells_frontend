import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"/>

      </Head>

      <body>
        <Main/>
      </body>

      <NextScript/>
      </Html>
    )
  }
}