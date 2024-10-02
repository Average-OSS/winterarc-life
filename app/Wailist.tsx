import Script from "next/script";

const cssLoader = `
let head = document.getElementsByTagName('HEAD')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css';
head.appendChild(link);
`;

export default function Waitlist() {
  return (
    <>
      <Script
        type=""
        id="1-waitlist"
        dangerouslySetInnerHTML={{ __html: cssLoader }}
      ></Script>

      <Script
        id="2-waitlist"
        src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
      ></Script>

      <div
        id="getWaitlistContainer"
        data-waitlist_id="20905"
        data-widget_type="WIDGET_2"
      ></div>
    </>
  );
}
