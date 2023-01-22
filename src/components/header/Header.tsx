import Image from "next/image";
import { FC, ReactNode } from "react";

const IconWrapper: FC<{ children: ReactNode; href: string }> = ({
  children,
  href,
}) => (
  <a href={href}>
    <div className="iconWrapper">{children}</div>
  </a>
);

export const Header: FC = () => (
  <div className="headerLayout">
    <div className="imageWrapper">
      <Image
        src="https://media.licdn.com/dms/image/C5603AQE7QxE9uJ7ZbA/profile-displayphoto-shrink_800_800/0/1516991327140?e=1680134400&v=beta&t=yCq0hQx00r8Uwwv2Krt6mAncK2Z6xUuGBvSScDPnP-c"
        alt="Ridvan Demirci"
        width={200}
        height={200}
      />
    </div>
    <div className="headerDetail">
      <h1>RIDVAN DEMİRCİ</h1>
      <div className="iconsContainer">
        <IconWrapper href="https://www.instagram.com/demirci.r/">
          <Image
            width={20}
            height={20}
            alt="Instagram"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAEwklEQVR42s1Zf2hVVRx/m7acZSsyGWoag6UILfpBv0hTlmQ/lAhiA1ejQbPAIEorkLl+gmyGrAWttNbm7ud7O0GsJ4Ui+gjXD3OYW1tJtXSGhTXTWUGU88Xuu/d7z3nv3nfv9Z336H7/uud8z/l+zjnf8/11YrH/8ycWoJ7asJP24zCNRKZ+JLCN1hm3JqZGFt09izbQICU10e/UYdwQft1l9BL+0CbcpY96rgkh3riLjudBeIr+wYtZj6O5GC04lz4MJ2mQ9mF3IPVRv0Lf0Z8eIPYYM/22voTeUwSfpTjqxbyc1LgMK+h1nFTmHRbl3qsniekcuo1KXbep+yJaT+PS7N90XprBhJclhlFzmfYrPQd7pX2IJ4uUbroNZ7nzs+5Z+bAqian0lrTIp9Xt/5o7vtx+Sb4MW7II7zCEcWmZVMPNY2JOPm3rxxfSF7zUdvf8+xjAQzrFGTPRSnHaGJ8utVXiX2cPRKnVtH0uTdhNQ83F+sT3zsARR6vEFEnfOpzlmrWp9Td4KkbOH56UVG6V1F7FrZ2phnZmvForgHYfnY9h1G4fSG3JHpvpdNrdDL7ZN2MV1ZhLjIVvXpDZT40uAPNOBYBwfIPlGXDI/h0MrVw30WZ8r5jXMxCo65yWpvEH7P4P0qC1OeOMyyYB/GhP0hdq3YsYfyb9RI2yunVOo8epDXXpqk0bnRGWp8ExG0Ai2JDQBr4xfrQv2I5SE3NfFQGAKM2y9qTiSa7NA4BkEb2viDkNk9Ya99PdqEcLfauAOGFNrBcAXlFClHW2FXMV8w58LkEYEBdrBYDrpLP/qme+zx49L8VTm/UC+MT1lrJlz5h6PfP97X8MkQFQtXu6nuGUDNVg3q36ALD7wGPBGQXOOJriFwFHBNBcjF9sjl/D5Dj0Gk+/VAsAYyGvf1sYW0lLmf8FLQBwL7M3hjLWpcwPLQDM1cx+X0hHbOcB2KkHQC37rpXhANCYPeMOPUewggGsCXcEbI469ChhBbO/G00JqUmTHeDgckyURLmGahyUiyHiCAZPBCrgbM6JT3kFaucFwLidB/yG2QEA3BT3bZ3OaBcPOZDVGT3nOiOjQieAqmB3LKZgk+uO0ao7IGlWAxI1Ao7FsJz6pYBksHdGgUIy4x7zEdqiBul0wnuPChSU0tG8BKX2LjQFheXY61uEyh1AUGKCUTUxyQsAyz3dglfTTv0UiGrC2EkPAHQ0KgB7L+ZhufmgWUuLjcpo1WD3RlmpGScVBwtVBKctDKBs8ne//ftzoQCwuZ6w0lZ0Ob/iigIBOGwf+g9ppRTUF0J8z3zHYEOkdPp6BrC7IBrg3oG1TpP7NFGd91eYMidipAl27fQUAxjKltVqWf9WlvWhbOWP8TGIaKWqiOrXINXjb5Q76iSr9obOcqViQR92S+J2jdAzq01ih1W90lwlRqvsMS0TJH/x6Vyum6TjZq3OfaBqGpI9h+fzlSjHsPq0Qs+KRbmK7rocDUrxJknj5hL/3P7TDBd7BLvQhRZsikrUBhPDXBvnWiKqst3SErRnvpvpI/SGMPe0mAbyIn7EXB36aYUeQCKwJhqFDhpr/PKkbAHHo+jBIfx13mInaAQCz4gFOb/7iXKjIhrRldkyA/f7D4B3Tt/SItWeAAAAAElFTkSuQmCC"
          />
        </IconWrapper>
        <IconWrapper href="https://github.com/ridvandmrc">
          <Image
            width={20}
            height={20}
            alt="Instagram"
            src="data:image/png;base64,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"
          />
        </IconWrapper>
        <IconWrapper href="https://www.linkedin.com/in/r%C4%B1dvan-demirci-324a37108/">
          <Image
            width={20}
            height={20}
            alt="Instagram"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFUlEQVR4nO2bXUhcRxTHQ1Pa0OaltG8JhbaEtA99yFsLBUlaqKE+qKvxG+NXRFG0NCiKuioqASWCIKL4ICoapSCISlutjV8Ii4rfSimEPKQfIf1IAknbpJ38z2XHnKx79+5dr51bMgf+rHt378w5v5k7c2ZmPXJE21NLTEw8HhcXV+rxeL6FfoYeQb/Ex8d/h9fP6XPVPh6aIchPodsIVIQQQflYta+OG4I672/tvWBzcnJEcXGx8cqvA9Lf0CeqfXbMYmNjX0dgv8sAa2pqxPz8vNjd3d3T7OysqKys5CB+TE9Pf1W1744YgqmWgdXV1YmdnZ1ngpei6xUVFbwnFKn23RFDMD4KKCEhQfh8vqDB857AAHyt2ndHDIH8RgHl5+eHDF4qMzNTQrih2ndHDADuU0CFhYVhAcjNzZU94CfVvjtiCGSXAkpKShIbGxshg19ZWRHIBWQP8Kn23REDgHb5XHd2doYE0NraymeCJtW+O2IA8K7MAah1e3p69s0Em5uboqOjwxgo/d3/Ib77pmrfHTNqTZ7s0HPe2NhotDhNjWzgM0TpsmqfHTWv1/sCAmu1SIOp5R9DFar9PTRDcGdpfof+Cgj8PjSMv8+o9vE/MVr1Qe9DHyFVfg+vL6n2SdthGnV9jPC5NpRoVhYtklDepUgUHR39slm56IVH8Z23aSVK9UNZGIwTqJfi2qmoqKgXIwaAZ/ua1QAYoB/MyoJTJ22WtSc8bu/wslJSUt5AeYX47CvonsUATRntOF4v2l6pugUAtaYMHIFckWm6XeG+XyFvTEzMK7YBUDbY398fVMnJybYA0IZKX19fSNXW1nLnL8BxD3Q3MKisrCxjT4Jyk66uLtHb2yu6u7uN97SHgVYPBuIm/DlnC8Di4qJpKpyRkWELADlmtbgaGhriDm/i9V/5Hj3BCHB6etqynO3tbTE+Pi6qq6v3MlZ/mf9AZa4FMDExEbQbNzQ0iOXl5bBWqIGanJwUpaWlgb3hiisBzM3NBY4DxqMRSeBcW1tbRjrPyzZN4VUCWFtbe8ZJer4PGjwXLeJY+Y8A+ENXASDRs07fp0HObE/yIGpubuYQvt+X2aoGcNii5XxRURGHcPm5AkCigZHtZ9zGEv/YcwWAVFVVxWeFi64FsLS0JAYGBkRLS4vwer2G4+Xl5cbmDOUFY2Njxrxvt9yAKfcb1wFYXV0VTU1NfOPVVJQZDg4O2ho06bvyqI+O+FJTU19zDQCqNy8vz3beT6dV6+vrYdfDZwT4+pkrAFAuUFBQwAO7gxaqp8URlUctRcL7t3A9Fp+PeFjKXFJSYrmlLzU8PMzraXAFgLa2Nu7UBgI9YVY+q+ccP86vr68Pq66FhQVe15fKAdCAR4cy/ufyQeCeQCgDqNO09JX1jYyMWNZHgycbY5aVA6BzCDY1NYcbPKsvTt5PyU44g2J2dras85ZyAHw/APd+YBcAGcDNyjKmpqYs65TjDe77QzkAlqL+Gem+HiU1ss729nbLOmmjRk6FygGwnRzTMq2M10lJk1WdNGv4ATxWCoAGJPb8z0UKgE62qDXllPi/AUCrNAbgeqQAyORsEM4PPTQADUAD0AA0AA1AA9AANAANQAPQADQADUAD0AA0AA1AA3gKYHR0VMzMzARVWlqaLQBlZWXGT9zMRD9acBoAHXqEqpPEzgX2AwhTjv9S1CkANuvUAOTNl3Ch24ZM/2GKjrHxeaddwYcvDgjgagR1djwBv5aIUwL+mikAAAAASUVORK5CYII="
          />
        </IconWrapper>
      </div>
    </div>
  </div>
);
