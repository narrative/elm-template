module Main where

import Effects exposing (Effects)
import Html exposing (Html)
import Signal exposing (Address)
import StartApp exposing (App)

type alias Model = Int

initModel : Model
initModel = 0

type Action = NoOp

update : Action -> Model -> (Model, Effects Action)
update action model = (model, Effects.none)

view : Address Action -> Model -> Html
view address model = Html.text "hello"

main : Signal Html
main = app.html

app : App Model
app =
  StartApp.start { init = (initModel, Effects.none)
                 , view = view
                 , update = update
                 , inputs = []
                 }
