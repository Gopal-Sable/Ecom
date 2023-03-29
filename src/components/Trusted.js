import styled from "styled-components";
const Trusted = () => {
    return <Wrapper className="brand-section">
        <div className="container">
            <h3>Trusted by 1000+ Companies</h3>
            <div className="brand-section-slider">

                <div className="slide">
                    <img
                        src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
                        alt="trusted-brands"
                    />
                </div>

                <div className="slide">
                    <img
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                        alt="trusted-brands"
                    />
                </div>

                <div className="slide">
                    <img
                        src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/tokopedia-apa-itu-startup-pengertian-cara-memulai-dan-1.png"
                        alt="trusted-brands"
                    />
                </div>

                <div className="slide">
                    <img
                        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                        alt="trusted-brands"
                    />
                </div>

                <div className="slide">
                    <img
                        src="https://www.freepnglogos.com/uploads/starbucks-logo-png-transparent-0.png"
                        alt="trusted-brands"
                    />
                </div>
                <div className="slide">
                    <img
                        src="https://www.freepnglogos.com/uploads/snapchat-logo-png-0.png"
                        alt="trusted-brands"
                    />
                </div>
                
            </div>
        </div>
    </Wrapper>
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
      filter: gray; /* IE5+ */
      -webkit-filter: grayscale(1); 
      -webkit-transition: all .8s ease-in-out;
    min-width: 10rem;
    max-width:15rem;
    height: 10rem;
  }
  img:hover {
    filter: none;
      -webkit-filter: grayscale(0);
      -webkit-transform: scale(1.01);
    }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted