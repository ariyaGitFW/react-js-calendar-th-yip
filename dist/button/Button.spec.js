import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { snapshot } from '../../test';
import PrimeReact from '../api/PrimeReact';
import { Button } from './Button';
describe('Button', () => {
  snapshot( /*#__PURE__*/React.createElement(Button, {
    label: 'test',
    visible: false
  }), 'when visible is false Button return null');
  snapshot( /*#__PURE__*/React.createElement(Button, {
    label: 'test',
    visible: true
  }), 'when visible is true Button render correctly');
  snapshot( /*#__PURE__*/React.createElement(Button, {
    label: 'test',
    iconPos: 'bottom',
    visible: true
  }), 'when iconPos is bottom Button is vertical');
  snapshot( /*#__PURE__*/React.createElement(Button, {
    visible: true
  }), 'when label is empty it returns empty button');
  snapshot( /*#__PURE__*/React.createElement(Button, {
    badge: 'test'
  }), 'when badge is true it renders Button with badge');
  snapshot( /*#__PURE__*/React.createElement(Button, null), 'when badge is null it renders Button without badge');
  snapshot( /*#__PURE__*/React.createElement(Button, {
    loading: 'test'
  }), 'when click the button if loading is true it renders Button with loading icon');
  snapshot( /*#__PURE__*/React.createElement(Button, null), 'when click the button if loading is false it renders Button without loading icon');
  snapshot( /*#__PURE__*/React.createElement(Button, null), 'when label is true it renders Button with default aria label');
  snapshot( /*#__PURE__*/React.createElement(Button, {
    label: 'test'
  }), 'when aria-label prop is not exist aria-label prop should be equal to label prop ');
  snapshot( /*#__PURE__*/React.createElement(Button, {
    "aria-label": 'test'
  }), 'when label prop is not exist label prop should be equal to aria-label prop');
  snapshot( /*#__PURE__*/React.createElement(Button, {
    label: 'test',
    badge: 'lost'
  }), 'when using badge and label the aria-label should contain both values');
  snapshot( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    label: 'test',
    badge: 'lost'
  })), 'when using badge and label the aria-label should contain both values');
  test('when using tooltip make sure the tooltip is rendered', async () => {
    // Arrange
    const {
      container
    } = render( /*#__PURE__*/React.createElement(Button, {
      label: 'test',
      tooltip: "Jest Tooltip"
    }));
    const button = container.getElementsByClassName('p-button')[0];
    const tooltipText = /Jest Tooltip/i;

    // tooltip does not exist to start
    expect(screen.queryByText(tooltipText)).toBeNull();

    // Act
    fireEvent.mouseEnter(button);

    // Assert
    await waitFor(() => screen.getByText(tooltipText));
    expect(screen.getByText(tooltipText)).toBeVisible();

    // tooltip disappears when we mouse out
    fireEvent.mouseLeave(button);
    expect(screen.queryByText(tooltipText)).toBeNull();
  });
  test('when button is clicked ensure onClick is fired', async () => {
    // Arrange
    const clickOn = jest.fn();
    const {
      container
    } = render( /*#__PURE__*/React.createElement(Button, {
      onClick: clickOn
    }));
    const button = container.getElementsByClassName('p-button')[0];

    // Act
    await userEvent.click(button);

    // Assert
    expect(button).toBeEnabled();
    expect(clickOn).toHaveBeenCalledTimes(1);
  });
  test('when button is disabled the click event should not fire', async () => {
    // Arrange
    const clickOn = jest.fn();
    const {
      container
    } = render( /*#__PURE__*/React.createElement(Button, {
      onClick: clickOn,
      disabled: true
    }));
    const button = container.getElementsByClassName('p-button')[0];

    // Act
    await userEvent.click(button);

    // Assert
    expect(button).toBeDisabled();
    expect(clickOn).toHaveBeenCalledTimes(0);
  });
  test('when Ripple is enabled button should have ripple effect', async () => {
    // Arrange
    const clickOn = jest.fn();
    PrimeReact.ripple = true;
    const {
      container
    } = render( /*#__PURE__*/React.createElement(Button, {
      onClick: clickOn
    }));
    const button = container.getElementsByClassName('p-button')[0];

    // Act
    await userEvent.click(button);

    // Assert
    expect(button).toBeEnabled();
    expect(clickOn).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});