import React, {useCallback} from 'react';
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";
import {mouseAttractionParticlesConfig} from "./mouse-attraction-particles-config";

function MouseAttractionPartical() {
    const particlesInit = useCallback(async (engine) => {

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {

    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={mouseAttractionParticlesConfig}
        />
    );
}

export default MouseAttractionPartical;