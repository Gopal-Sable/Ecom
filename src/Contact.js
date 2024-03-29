import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.3255601437277!2d75.32176601486397!3d19.868470286638182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9861a6d01f43%3A0x3a1b932d329091e9!2sGovernment%20College%20Of%20Engineering%2C%20Aurangabad!5e0!3m2!1sen!2sin!4v1679994384548!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowfullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mrgvyzbz" method="post" className="contact-inputs">
            <input
              type="text"
              name="username"
              required
              placeholder="Enter your username"
              autoComplete="off"
            />
            <input type="email" name="Email" placeholder="Enter your Mail-ID" autoComplete="off" required />
            <textarea name="message" id="" cols="30" rows="10" placeholder="Enter your message ...." autoComplete="off" required></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
