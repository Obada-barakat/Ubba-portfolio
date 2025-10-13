import { colors } from "../styles/colors";

const footerStyle = {
  color: colors.white,
  textAlign: "center",
  borderTop: `2px solid ${colors.white}`,
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 Ubba Obada</p>
    </footer>
  );
}
