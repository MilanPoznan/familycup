import styled from 'styled-components'

export const FooterWrapper = styled.div`
  padding: 40px 0 100px;
  background: #051a12;
  color: '#fff';
  img {
    width: 118px;
    height: 118px;
    margin-bottom: 26px;
    
  }
  @media (min-width: 1200px) {
    img {
      margin-right: 56px;
    }
  }
`
export const FooterHelperWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  @media (min-width: 1200px) {
    flex-flow: row;
    max-width: 1100px;
    margin: 0 auto;
  }

`
export const WorkingTime = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 40px;
  text-align: center;
  p {
    font-family: 'met-semi-bold';
    font-size: 14px;
    color: #fff;

  }
  .light {
    font-family: 'met-light';
    margin: 6px 0;
  }
  @media (min-width: 1200px) {
    padding-top: 12px;
    text-align: left;

  .light {
    margin: 12px 0 4px;
    }
  }
`

export const LokacijeString = styled.p`
  color: #fff;
  text-align: center;
  @media (min-width: 1200px) {
    position: absolute;
    top: 10px;
  }
`
export const LokacijeWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  h3 {
    font-family: 'met-bold';
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    margin-bottom: 4px;
  }
  p {
    font-family: 'met-light';
    line-height: 1.5;
    opacity: 0.8;

  }
  @media (min-width: 1200px) {
    display: flex;
    flex-flow: row;
    text-align: left;
    margin: 0 60px;
    padding-top: 20px;
    h3{
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      text-align: left;
    }
    p {
      font-size: 12px;
    }
  }

`

export const SingleLokacijeWrapper = styled.div`
  margin-bottom: 40px;
  @media (min-width: 1200px) {
    margin-right: 36px;
    min-width: 166px;

  }
`

export const SocialMediaWrapper = styled.div`
  display: flex;
  img {
    width: 30px;
    height: 30px;
    margin: 0 10px;
  }
  @media (min-width: 1200px) {
    position: absolute;
    top: 180px;
    left: calc(50% - 50px);
  }
`