import React, { useState } from "react";
import Collapsed from "./Collapsed";
import Expanded from "./Expanded";

const Accordion = ({ children, initial, accordionWidth }) => {
  const [open, setOpen] = useState(initial);

  const handleOpen = (e) => {
    const id = e.target.getAttribute("data-id");
    id === open ? setOpen("") : setOpen(id);
  };

  return (
    <div style={{ width: accordionWidth }}>
      {React.Children.map(children, (child) => {
        const id = child.props.children[0].props.id;

        const collapsed = React.cloneElement(child.props.children[0], {
          handleOpen,
          isOpen: id === open,
        });

        const expanded = child.props.children[1];

        return (
          <div>
            {collapsed}
            {id === open && expanded}
          </div>
        );
      })}
    </div>
  );
};

Accordion.Collapsed = Collapsed;
Accordion.Expanded = Expanded;
Accordion.Item = ({ children }) => children;

export default Accordion;
