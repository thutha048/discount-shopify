// import React from 'react';
// import { Card, Page, Layout, TextContainer, Text } from "@shopify/polaris";

// export default function CreateDiscount() {
//     return (
//         <Page
//         title="Create Discount Page"
//         primaryAction={{
//          content: "Save",
//         }}
//      >
      
//      </Page>

//     )
// }

// import React, { useState } from "react";
// import {
//   MethodCard,
//   DiscountClass,
//   DiscountMethod,
// } from "@shopify/discount-app-components";

// export default function MyApp() {
//   const [discountMethod, setDiscountMethod] = useState(
//     DiscountMethod.Automatic
//   );
//   const [discountTitle, setDiscountTitle] = useState("");
//   const [discountCode, setDiscountCode] = useState("");

//   return (
//     <MethodCard
//       title="Tiered discount"
//       discountClass={DiscountClass.Product}
//       discountMethod={{
//         value: discountMethod,
//         onChange: setDiscountMethod,
//       }}
//       discountTitle={{
//         value: discountTitle,
//         onChange: setDiscountTitle,
//       }}
//       discountCode={{
//         value: discountCode,
//         onChange: setDiscountCode,
//       }}
//     />
//   );
// }


// import React, { useState } from "react";
// import {
//   CombinationCard,
//   DiscountClass,
// } from "@shopify/discount-app-components";

// function MyApp() {
//   const [combinesWith, setCombinesWith] = useState({
//     orderDiscounts: false,
//     productDiscounts: false,
//     shippingDiscounts: false,
//   });

//   return (
//     <CombinationCard
//       combinableDiscountTypes={{
//         value: combinesWith,
//         onChange: setCombinesWith,
//       }}
//       combinableDiscountCounts={{
//         orderDiscountsCount: 0,
//         productDiscountsCount: 3,
//         shippingDiscountsCount: 0,
//       }}
//       discountClass={DiscountClass.Product}
//       discountDescriptor="Spring Sale - 20% off"
//       discountId="gid://Shopify/DiscountNode/123456"
//     />
//   );
// }



// import React, { useState } from "react";
// import { 
//     ActiveDatesCard,
//     MethodCard,
//     DiscountClass,
//     DiscountMethod,
//     CombinationCard,
// } from "@shopify/discount-app-components";

// export default function MyApp() {
//   const [startTime, setStartTime] = useState("2022-06-13T04:30:00.000Z");
//   const [endTime, setEndTime] = useState("2022-06-14T03:30:00.000Z");

//   const [discountMethod, setDiscountMethod] = useState(
//     DiscountMethod.Automatic
//   );
//   const [discountTitle, setDiscountTitle] = useState("");
//   const [discountCode, setDiscountCode] = useState("");

//   const [combinesWith, setCombinesWith] = useState({
//     orderDiscounts: false,
//     productDiscounts: false,
//     shippingDiscounts: false,
//   });
//   return (
//     <page>

//     <ActiveDatesCard
//       startDate={{
//         value: startTime,
//         onChange: setStartTime,
//       }}
//       endDate={{
//         value: endTime,
//         onChange: setEndTime,
//       }}
//       timezoneAbbreviation="EST"
//     />

//     <MethodCard
//         title="Tiered discount"
//         discountClass={DiscountClass.Product}
//         discountMethod={{
//         value: discountMethod,
//         onChange: setDiscountMethod,
//         }}
//         discountTitle={{
//         value: discountTitle,
//         onChange: setDiscountTitle,
//         }}
//         discountCode={{
//         value: discountCode,
//         onChange: setDiscountCode,
//         }}
//     />

//     <CombinationCard
//       combinableDiscountTypes={{
//         value: combinesWith,
//         onChange: setCombinesWith,
//       }}
//       combinableDiscountCounts={{
//         orderDiscountsCount: 0,
//         productDiscountsCount: 3,
//         shippingDiscountsCount: 0,
//       }}
//       discountClass={DiscountClass.Product}
//       discountDescriptor="Spring Sale - 20% off"
//       discountId="gid://Shopify/DiscountNode/123456"
//     />

//     </page>

//   );
// }




// import {Page, AppProvider as PolarisAppProvider} from '@shopify/polaris';
// import {Provider as AppBridgeProvider} from '@shopify/app-bridge-react';
// import {
//   SampleComponent,
//   AppProvider,
// } from '@shopify/discount-app-components';

// import enPolarisTranslations from '@shopify/polaris/locales/en.json';

// import "@shopify/polaris/build/esm/styles.css";
// import "@shopify/discount-app-components/build/esm/styles.css";

// export default function App() {
//   const config = {
//     // The client ID provided for your application in the Partner Dashboard.
//     apiKey: "25e9ede95104af2b68374d3dc0c4622f",
//     // The host of the specific shop that's embedding your app. This value is provided by Shopify as a URL query parameter that's appended to your application URL when your app is loaded inside the Shopify admin.
//     host: "thaostore-com.myshopify.com"
//     };
 

//   return (
//     <AppBridgeProvider config={config}>
//       <PolarisAppProvider i18n={enPolarisTranslations}>
//         <AppProvider locale="en-US" ianaTimezone="America/Los_Angeles">
//           <Page title="Example app">
//             <SampleComponent />
//           </Page>
//         </AppProvider>
//       </PolarisAppProvider>
//     </AppBridgeProvider>
//   );
// }

import {
  Badge,
  ButtonGroup,
  FullscreenBar,
  Button,
  Text,
} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export default function FullscreenBarExample() {
  const [isFullscreen, setFullscreen] = useState(true);

  const handleActionClick = useCallback(() => {
    setFullscreen(false);
  }, []);

  const fullscreenBarMarkup = (
    <FullscreenBar onAction={handleActionClick}>
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '1rem',
          paddingRight: '1rem',
        }}
      >
        <Badge status="info">Draft</Badge>
        <div style={{marginLeft: '1rem', flexGrow: 1}}>
          <Text variant="headingLg" as="p">
            Page title
          </Text>
        </div>
        <ButtonGroup>
          <Button onClick={() => {}}>Secondary Action</Button>
          <Button primary onClick={() => {}}>
            Primary Action
          </Button>
        </ButtonGroup>
      </div>
    </FullscreenBar>
  );

  return (
    <div style={{height: '300px', width: '100%'}}>
      {isFullscreen && fullscreenBarMarkup}
      <div style={{padding: '1rem'}}>
        {!isFullscreen && (
          <Button onClick={() => setFullscreen(true)}>Go Fullscreen</Button>
        )}
        <Text variant="headingLg" as="p">
          Page content
        </Text>
      </div>
    </div>
  );
}



