import React from 'react';

//source : https://reactjsexample.com/a-very-lightweight-accordion-component-in-react/
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

/*buat atomic jadi false kalau mau lebih dari 1 item bisa aktif */
var AdminBatmon = () => (
  <div>
    <h1 className="centeredH1">Menu Admin Batmon</h1>
    <Accordion atomic={true}>

      <AccordionItem title="Voltage 1">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="Voltage 2">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="Voltage 3">
        <DummyContent />
      </AccordionItem>

    </Accordion>
  </div>
);

const DummyContent = () => (
  <p style={{ padding: '18px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

export default AdminBatmon;