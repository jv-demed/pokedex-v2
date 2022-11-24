import styled from 'styled-components';

const SpinLoaderStyled = styled.div`
    @keyframes rotateSpinLoading{
        0%{
            transform: scale(1) rotate(360deg);
        }50%{
            transform: scale(0.8) rotate(-360deg);
        }100%{
            transform: scale(1) rotate(360deg);
        }
    }
    height: ${props => props.size};
    margin: auto;
    width: ${props => props.size};
    .loader{
        animation: rotateSpinLoading 5s linear infinite;
        border: 8px solid rgba(0,0,0,0);
        border-radius: 50%;
        border-bottom-color: ${({ theme }) => theme.red.i400};
        border-top-color: ${({ theme }) => theme.blue.i300};
        box-sizing: border-box;
        height: 100%;
        width: 100%;
    }
    .loader-inner{
        animation-duration: 2.5s;
        border-bottom-color: ${({ theme }) => theme.basics.white};
        border-top-color: ${({ theme }) => theme.green.i400};
    }
`

export function SpinLoader({ size }){
    return(
        <SpinLoaderStyled size={size}>
            <div className='loader'>
                <div className='loader loader-inner' />
            </div>
        </SpinLoaderStyled>
    )
}