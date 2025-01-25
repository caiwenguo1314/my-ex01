import { React, } from "react";
import { Layout, Row, Typography, Button, Space } from "antd";
import { useInsurance } from "../../../context/InsuranceContext";
import './AppFooter.css';

const { Text } = Typography;
const { Footer } = Layout;

export default function AppFooter() {
  const {
    formState,
    addClickHandler,
    subClickHandler,
    form,
  } = useInsurance();

  const clickHandler = () => {
    if (formState.lifeAssured.length === 0) {
      alert("Please select Life Assured");
      return;
    }
    if (formState.current < 3) {
      addClickHandler();
    }
    if (formState.current === 2) {
      form.submit();
    }
  };

  const disabled = () => {
    if (formState.current === 2) {
      return !formState.isFormValid;
    } else {
      return false;
    }
  };

  const footerText = "In case of any queries, please contact our customer relations officer at PRUDENTIAL Customerline: 150008/15008";

  return (
    <Footer className="app-footer">
      <Row className="footer-row">
        <Text 
          className="footer-text"
          data-full-text={footerText}
        >
          {footerText}
        </Text>
        <Space className="footer-buttons">
          <Button
            onClick={formState.current > 0 ? subClickHandler : null}
            size="large"
            className="footer-button"
            type="default"
            danger
          >
            Back
          </Button>
          {formState.current === 3 ? (
            <Button
              onClick={null}
              size="large"
              className="footer-button"
              type="primary"
            >
              Submit
            </Button>
          ) : (
            <Button
              onClick={formState.lifeAssured ? clickHandler : null}
              disabled={disabled()}
              size="large"
              className="footer-button"
              type="primary"
            >
              Continue
            </Button>
          )}
        </Space>
      </Row>
    </Footer>
  );
}
