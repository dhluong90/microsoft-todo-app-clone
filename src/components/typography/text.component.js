import styled from 'styled-components/native';

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.regular};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.text};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

const regular = (theme) => `
  color: ${theme.colors.text}
`;

const grey = (theme) => `
  color: ${theme.colors.icon}
`;
const important = (theme) => `
  color: ${theme.colors.important}
`;
const assigned = (theme) => `
  color: ${theme.colors.assigned}
`;
const planned = (theme) => `
  color: ${theme.colors.planned}
`;
const task = (theme) => `
  color: ${theme.colors.task}
`;

const styles = {
  grey,
  important,
  assigned,
  planned,
  task,
  regular,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
  ${({ style, theme }) => styles[style](theme)}
`;

Text.defaultProps = {
  variant: 'body',
  style: 'regular',
};
