const React = {
  createElement(Component: () => any) {
    return Component();
  },
};

const Component = () => {
  var trueKey: boolean = true;
  var falseKey: boolean = false;
  var subKey = { subProp: 1 };

  return { data: { trueKey, falseKey, subKey } };
};

export default <Component />;
