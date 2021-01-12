export interface ISpaceX{
    mission_name: string,
    links: ISpaceXLink,
    mission_id: string[],
    launch_year: string,
    launch_success: boolean,
    rocket:ISpaceXRocket,
}

export interface ISpaceXLink{
    mission_patch_small:string
}

export interface ISpaceXRocket{
    first_stage: ISpaceXRocketStage
}

export interface ISpaceXRocketStage{
    cores: ISpaceXRocketStageCore[]
}

export interface ISpaceXRocketStageCore{
    land_success:string 
}
